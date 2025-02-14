import React from 'react';

const Third_page = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <p className="text-center text-4xl font-semibold mt-10 text-gray-800">Post Jobs</p>
      <p className="text-center mt-8 text-gray-600"><img src="https://img.freepik.com/free-photo/we-are-hiring-digital-collage_23-2149667063.jpg" alt="" className='h-98 w-full'/></p>

      <div className="mt-8 space-y-6">
        <div className="space-y-2">
          <p className="text-xl font-semibold text-gray-800">Quick and Easy Way to Advertise</p>
          <p className="text-base text-gray-600 leading-relaxed">
            If you're looking to fill open positions with qualified and competent workers, Jobxpro is your best bet.
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-xl font-semibold text-gray-800">Hire for Your Company:</p>
          <p className="text-base text-gray-600 leading-relaxed">
            Simply post your work specifications and due dates on our platform. You will be updated on the status of
            application submissions as they come in.
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-xl font-semibold text-gray-800">Reach out to Qualified Matches:</p>
          <p className="text-base text-gray-600 leading-relaxed">
            Get in touch with good fits by sorting out candidates using different criteria. There is no extra work or
            inconvenience involved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Third_page;
