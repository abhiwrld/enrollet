import React from 'react';

interface ApplicationFormPreviewProps {
  formType?: 'personal' | 'academic' | 'documents';
}

const ApplicationFormPreview: React.FC<ApplicationFormPreviewProps> = ({ 
  formType = 'personal'
}) => {
  return (
    <div className="p-4">
      {formType === 'personal' && (
        <>
          <h3 className="text-lg font-medium mb-4">Personal Information</h3>
          <div className="space-y-4">
            <div className="form-preview-field">
              <label className="block text-xs text-gray-500 mb-1">Full Name</label>
              <div className="h-8 bg-gray-100 border border-gray-200 rounded-md w-full flex items-center px-3 text-sm">
                Rahul Sharma
              </div>
            </div>
            <div className="form-preview-field">
              <label className="block text-xs text-gray-500 mb-1">Date of Birth</label>
              <div className="h-8 bg-gray-100 border border-gray-200 rounded-md w-full flex items-center px-3 text-sm">
                15/04/2003
              </div>
            </div>
            <div className="form-preview-field">
              <label className="block text-xs text-gray-500 mb-1">Contact Number</label>
              <div className="h-8 bg-gray-100 border border-gray-200 rounded-md w-full flex items-center px-3 text-sm">
                +91 9876543210
              </div>
            </div>
            <div className="mt-6">
              <button className="w-full bg-blue-600 text-white py-2 rounded-md font-medium">
                Continue to Academic Info
              </button>
            </div>
          </div>
        </>
      )}
      
      {formType === 'academic' && (
        <>
          <h3 className="text-lg font-medium mb-4">Academic Information</h3>
          <div className="space-y-4">
            <div className="form-preview-field">
              <label className="block text-xs text-gray-500 mb-1">Current School</label>
              <div className="h-8 bg-gray-100 border border-gray-200 rounded-md w-full flex items-center px-3 text-sm">
                Delhi Public School, Delhi
              </div>
            </div>
            <div className="form-preview-field">
              <label className="block text-xs text-gray-500 mb-1">Grade/Percentage</label>
              <div className="h-8 bg-gray-100 border border-gray-200 rounded-md w-full flex items-center px-3 text-sm">
                92.5%
              </div>
            </div>
            <div className="form-preview-field">
              <label className="block text-xs text-gray-500 mb-1">Intended Major</label>
              <div className="h-8 bg-gray-100 border border-gray-200 rounded-md w-full flex items-center px-3 text-sm">
                Computer Science
              </div>
            </div>
            <div className="mt-6">
              <button className="w-full bg-blue-600 text-white py-2 rounded-md font-medium">
                Continue to Documents
              </button>
            </div>
          </div>
        </>
      )}
      
      {formType === 'documents' && (
        <>
          <h3 className="text-lg font-medium mb-4">Required Documents</h3>
          <div className="space-y-4">
            <div className="form-preview-field">
              <div className="flex justify-between items-center mb-1">
                <label className="block text-xs text-gray-500">Academic Transcript</label>
                <span className="text-xs text-green-600">Uploaded</span>
              </div>
              <div className="h-10 bg-gray-100 border border-gray-200 rounded-md w-full flex items-center px-3 text-sm">
                <span className="text-gray-600 text-xs">transcript_2023.pdf</span>
              </div>
            </div>
            <div className="form-preview-field">
              <div className="flex justify-between items-center mb-1">
                <label className="block text-xs text-gray-500">ID Proof</label>
                <span className="text-xs text-green-600">Uploaded</span>
              </div>
              <div className="h-10 bg-gray-100 border border-gray-200 rounded-md w-full flex items-center px-3 text-sm">
                <span className="text-gray-600 text-xs">aadhar_card.pdf</span>
              </div>
            </div>
            <div className="form-preview-field">
              <div className="flex justify-between items-center mb-1">
                <label className="block text-xs text-gray-500">Statement of Purpose</label>
                <span className="text-xs text-amber-600">Required</span>
              </div>
              <div className="h-10 bg-gray-50 border border-dashed border-gray-300 rounded-md w-full flex justify-center items-center px-3 text-sm">
                <span className="text-gray-500 text-xs">+ Upload SOP</span>
              </div>
            </div>
            <div className="mt-6">
              <button className="w-full bg-blue-600 text-white py-2 rounded-md font-medium">
                Review & Submit
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ApplicationFormPreview; 