import React, { useState } from 'react';

const Pricing = () => {
    const [billingCycle, setBillingCycle] = useState('monthly');

    const plans = [
        {
            name: 'Basic',
            price: {
                monthly: '$10',
                annually: '$100',
            },
            features: [
                '1 Project',
                '5 Pages per project',
                'Community support',
            ],
            cta: 'Get Started',
            isPopular: false,
        },
        {
            name: 'Pro',
            price: {
                monthly: '$29',
                annually: '$290',
            },
            features: [
                '10 Projects',
                'Unlimited pages',
                'Custom domain',
                'Priority support',
            ],
            cta: 'Start Free Trial',
            isPopular: true,
        },
        {
            name: 'Enterprise',
            price: {
                monthly: 'Contact Us',
                annually: 'Contact Us',
            },
            features: [
                'Unlimited projects',
                'Team collaboration',
                'Dedicated support',
                'Advanced analytics',
            ],
            cta: 'Contact Sales',
            isPopular: false,
        },
    ];

    return (
        <div className="bg-black text-white min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                        Pricing Plans
                    </h1>
                    <p className="mt-4 text-lg text-gray-400">
                        Choose the plan that's right for you.
                    </p>
                </div>

                <div className="mt-10 flex justify-center">
                    <div className="bg-gray-800 rounded-full p-1 flex items-center">
                        <button
                            onClick={() => setBillingCycle('monthly')}
                            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                                billingCycle === 'monthly' ? 'bg-indigo-600 text-white' : 'text-gray-400'
                            }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingCycle('annually')}
                            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                                billingCycle === 'annually' ? 'bg-indigo-600 text-white' : 'text-gray-400'
                            }`}
                        >
                            Annually (Save 20%)
                        </button>
                    </div>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`rounded-xl p-8 border transition-transform duration-300 ${
                                plan.isPopular ? 'border-purple-500 ring-2 ring-purple-500 scale-105' : 'border-gray-700'
                            } bg-gray-900/50 backdrop-blur-sm`}
                        >
                            {plan.isPopular && (
                                <div className="absolute top-0 right-0 -mt-4 -mr-4">
                                    <div className="bg-purple-500 text-white text-xs font-semibold py-1 px-3 rounded-full">
                                        POPULAR
                                    </div>
                                </div>
                            )}
                            <h3 className="text-2xl font-bold">{plan.name}</h3>
                            <p className="mt-4 text-4xl font-extrabold">
                                {billingCycle === 'monthly' ? plan.price.monthly : plan.price.annually}
                                {plan.price.monthly !== 'Contact Us' && <span className="text-base font-medium text-gray-400">/ {billingCycle === 'monthly' ? 'mo' : 'yr'}</span>}
                            </p>
                            <ul className="mt-8 space-y-4">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center">
                                        <svg className="h-6 w-6 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className={`mt-8 w-full py-3 px-6 text-center font-semibold rounded-lg transition-colors ${
                                plan.isPopular ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-700 hover:bg-gray-600'
                            }`}>
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pricing;