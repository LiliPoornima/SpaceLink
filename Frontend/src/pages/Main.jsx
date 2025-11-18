import { Calendar, Users, Clock, MapPin, Zap, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Main() {
  const isAuthenticated = false; // Change to true to see authenticated view

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 font-sans">
      
      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            SpaceLink
          </h1>
        </div>
        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg transition-all font-medium cursor-pointer">
              Dashboard
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 rounded-lg text-gray-700 hover:bg-white hover:shadow-md transition-all font-medium cursor-pointer"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg transition-all font-medium cursor-pointer"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white rounded-full text-indigo-700 text-sm font-medium shadow-md mb-8 border border-indigo-100">
            <Zap className="w-4 h-4" />
            Smart workspace management
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-gray-900">
            Book rooms and resources <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              in seconds
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Find available rooms, manage bookings, and sync with your calendar. Simple, fast, and efficient workspace management.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="group px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-2xl transition-all transform hover:scale-105 font-semibold flex items-center gap-2">
              Browse Resources
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              to="/signup"
              className="px-8 py-4 rounded-xl bg-white border-2 border-indigo-200 text-indigo-700 hover:border-indigo-400 hover:shadow-lg transition-all font-semibold"
            >
              Create Account
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition">
              <Shield className="w-4 h-4 text-indigo-600" />
              <span className="font-medium">Secure & Private</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition">
              <Zap className="w-4 h-4 text-indigo-600" />
              <span className="font-medium">Instant Booking</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition">
              <Users className="w-4 h-4 text-indigo-600" />
              <span className="font-medium">Team Collaboration</span>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16 max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <Calendar className="mx-auto mb-3 w-8 h-8 text-indigo-600" />
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Real-time Availability</h3>
            <p className="text-gray-600 text-sm">
              Check room schedules and book instantly without conflicts.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <Clock className="mx-auto mb-3 w-8 h-8 text-indigo-600" />
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Quick Booking</h3>
            <p className="text-gray-600 text-sm">
              Book a room in under 30 seconds with a simple process.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <Users className="mx-auto mb-3 w-8 h-8 text-indigo-600" />
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Team Management</h3>
            <p className="text-gray-600 text-sm">
              Coordinate with your team, share bookings, and manage group reservations.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-12 max-w-4xl mx-auto text-gray-700 bg-white rounded-xl p-6 shadow-md grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-indigo-600">10k+</div>
            <div className="text-sm mt-1">Active Users</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-indigo-600">50k+</div>
            <div className="text-sm mt-1">Bookings Made</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-indigo-600">99.9%</div>
            <div className="text-sm mt-1">Uptime</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-indigo-600">500+</div>
            <div className="text-sm mt-1">Companies</div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-white to-indigo-50 rounded-3xl p-12 mb-20 shadow-lg border border-indigo-100">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Why teams love SpaceLink</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: 'Save time every day', desc: 'No more back-and-forth emails or double bookings.' },
              { title: 'Calendar integration', desc: 'Sync with Google Calendar, Outlook, and more.' },
              { title: 'Mobile friendly', desc: 'Book rooms on the go from any device.' },
              { title: 'Analytics & insights', desc: 'Track usage and optimize your workspace.' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900 mb-1">{item.title}</div>
                  <div className="text-gray-600">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 rounded-3xl p-16 text-center text-white shadow-2xl">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative z-10">
            <h3 className="text-4xl font-bold mb-4">Ready to streamline your workspace?</h3>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              Join hundreds of teams already using SpaceLink to manage their resources efficiently.
            </p>
            <button className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-white text-indigo-600 hover:bg-gray-50 transition-all font-bold shadow-2xl hover:scale-105 transform cursor-pointer text-lg">
              Get Started for Free
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="mt-6 text-sm opacity-75">No credit card required • Free forever</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-gray-200 text-center text-gray-600">
        <p className="text-sm">© 2024 SpaceLink. All rights reserved.</p>
      </footer>
    </div>
  );
}
