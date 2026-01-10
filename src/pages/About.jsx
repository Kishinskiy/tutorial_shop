export default function About(){
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl font-bold text-center mb-4">About Us</h1>
                    <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
                        Your trusted destination for quality products and exceptional service
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Mission Section */}
                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        At Tutorial Shop, we are committed to providing our customers with high-quality products 
                        at competitive prices. Our mission is to make shopping convenient, enjoyable, and accessible 
                        for everyone. We carefully curate our selection to ensure that every product meets our 
                        standards of excellence.
                    </p>
                </div>

                {/* Values Section */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality First</h3>
                        <p className="text-gray-600">
                            We carefully select every product to ensure the highest quality standards for our customers.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Delivery</h3>
                        <p className="text-gray-600">
                            Quick and reliable shipping to get your products to you as soon as possible.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Customer Support</h3>
                        <p className="text-gray-600">
                            Our dedicated team is always ready to help you with any questions or concerns.
                        </p>
                    </div>
                </div>

                {/* Story Section */}
                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                        <p>
                            Tutorial Shop was founded with a simple vision: to create an online shopping experience 
                            that combines convenience, quality, and exceptional customer service. What started as a 
                            small venture has grown into a trusted platform serving thousands of satisfied customers.
                        </p>
                        <p>
                            We believe that shopping should be enjoyable and stress-free. That's why we've built our 
                            platform with user experience in mind, making it easy to find exactly what you're looking for. 
                            Our diverse product range includes electronics, clothing, books, furniture, and outdoor gear 
                            to meet all your needs.
                        </p>
                        <p>
                            As we continue to grow, our commitment to quality and customer satisfaction remains unchanged. 
                            We're constantly working to improve our services, expand our product selection, and enhance 
                            your shopping experience. Thank you for being part of our journey!
                        </p>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-lg p-8 text-white">
                    <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-blue-100 mb-6 text-lg">
                        Have questions or feedback? We'd love to hear from you!
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-semibold mb-2">Email</h3>
                            <p className="text-blue-100">support@tutorialshop.com</p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Phone</h3>
                            <p className="text-blue-100">+1 (234) 567-890</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
