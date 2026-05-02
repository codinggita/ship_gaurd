import React from 'react';
import ClaimStepper from './components/ClaimStepper';
import ClaimForm from './components/ClaimForm';
import DamageTypeSelector from './components/DamageTypeSelector';
import EvidenceUploader from './components/EvidenceUploader';
import DiagnosticSummary from './components/DiagnosticSummary';
import ClaimFooter from './components/ClaimFooter';
import SEO from '../../components/Common/SEO';

export default function ClaimsTerminal() {
  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto flex flex-col min-h-full animate-fade-in pb-16">
      <SEO 
        title="Claims Terminal" 
        description="Initiate and manage logistics claims. Secure portal for uploading evidence and diagnostic reports." 
      />
      
      {/* Top Header */}
      <div className="flex justify-between items-end border-b border-sg-border pb-6 mb-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-wider text-white uppercase mb-2">
            INITIATE CLAIM
          </h1>
          <span className="text-[10px] font-mono tracking-widest text-sg-text-muted uppercase flex items-center">
            <div className="w-2 h-2 bg-sg-green rounded-sm mr-2 glow-green animate-pulse"></div>
            SYSTEM_READY // UPLOAD_PERMISSION_GRANTED
          </span>
        </div>
      </div>

      <div className="bg-sg-card border border-sg-border p-6 md:p-10 rounded-sm">
        <ClaimStepper />
        
        <div className="bg-sg-black border border-sg-border p-6 md:p-10 mb-8 rounded-sm">
          <ClaimForm />
          <DamageTypeSelector />
          <EvidenceUploader />
          <DiagnosticSummary />
        </div>
        
        <ClaimFooter />
      </div>
      
    </div>
  );
}
