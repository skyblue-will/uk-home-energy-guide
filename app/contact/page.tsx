import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - UK Home Energy Guide",
};

export default function ContactPage() {
  return (
    <div className="max-w-content mx-auto px-6 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
        Contact
      </h1>
      <div className="prose">
        <p>For inquiries or feedback, please use the contact form below.</p>
        <p>We aim to respond within 48 hours.</p>
      </div>

      <form className="mt-8 space-y-6 max-w-md">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              First Name
            </label>
            <input
              type="text"
              id="first-name"
              name="first-name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Last Name
            </label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Comment or Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          className="bg-gray-900 text-white px-6 py-2.5 rounded-md text-sm font-semibold hover:bg-gray-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
