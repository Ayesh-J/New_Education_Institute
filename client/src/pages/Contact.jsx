export default function Contact() {
  return (
    <section className="px-6 py-20 bg-[#f4f4f4]">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#002C77] mb-4">
            Contact Us
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
            We’d love to hear from you! Reach out for admissions, events, or any general inquiries.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-md border-4 border-[#F5B041]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3849.124615254741!2d74.1105494!3d15.2609986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfac64e723e957%3A0x71dfc531a667b957!2sThe%20New%20Educational%20Institute!5e0!3m2!1sen!2sin!4v1760764251067!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The New Educational Institute Location"
            ></iframe>
          </div>

          {/* Contact Info Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-l-4 border-[#F5B041] flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-[#002C77] mb-6">
              Kakodkar's The New Educational Institute
            </h2>

            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                <strong>Address:</strong><br />
                7466+96R, BEPQUEGAL, Vodlemol Cacora, Hodar, Goa 403706
              </p>
              <p>
                <strong>Phone:</strong> +91 8322659244
              </p>
              <p>
                <strong>Email:</strong> info@neischool.in
              </p>
              <p>
                <strong>Working Hours:</strong><br />
                Monday – Saturday, 8:30 AM – 3:30 PM
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-6"></div>

            <p className="text-sm text-gray-500">
              We’re always here to help with admissions, events, or any general questions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
