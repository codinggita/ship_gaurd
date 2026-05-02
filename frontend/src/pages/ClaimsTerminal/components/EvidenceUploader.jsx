import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FileUp, File, X } from 'lucide-react';

export default function EvidenceUploader() {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(prev => [...prev, ...acceptedFiles]);
  }, []);

  const removeFile = (e, idx) => {
    e.stopPropagation();
    setFiles(prev => prev.filter((_, i) => i !== idx));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'application/pdf': ['.pdf'],
      'text/plain': ['.log', '.txt']
    },
    maxSize: 52428800 // 50MB
  });

  return (
    <div className="mb-10">
      <label className="text-[10px] font-mono tracking-widest uppercase text-sg-text-muted block mb-4">
        VISUAL EVIDENCE / TELEMETRY LOGS
      </label>
      
      <div 
        {...getRootProps()} 
        className={`border-2 border-dashed p-10 min-h-[250px] flex flex-col items-center justify-center cursor-pointer transition-colors ${
          isDragActive 
            ? 'border-sg-red bg-sg-red/5 glow-red' 
            : 'border-sg-border bg-sg-black hover:border-sg-red/50 hover:bg-sg-card'
        }`}
      >
        <input {...getInputProps()} />
        
        {files.length === 0 ? (
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-sg-card border border-sg-border flex items-center justify-center mb-6">
              <FileUp className="w-5 h-5 text-sg-red" />
            </div>
            <p className="text-xl font-display uppercase tracking-wider text-white mb-2">
              DROP MANIFEST FILES
            </p>
            <p className="text-[10px] font-mono tracking-widest text-sg-text-muted uppercase">
              SUPPORTED: .JPG, .PDF, .LOG_DUMP (MAX 50MB)
            </p>
          </div>
        ) : (
          <div className="w-full h-full flex flex-col">
            <p className="text-[10px] font-mono tracking-widest text-sg-red uppercase mb-4">
              FILES_STAGED: {files.length}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
              {files.map((file, idx) => (
                <div key={idx} className="bg-sg-card border border-sg-border p-3 flex justify-between items-center group hover:border-sg-red/50 transition-colors">
                  <div className="flex items-center space-x-3 overflow-hidden">
                    <File className="w-4 h-4 text-sg-text-muted shrink-0" />
                    <span className="text-xs font-mono text-sg-text truncate">
                      {file.name}
                    </span>
                  </div>
                  <button 
                    onClick={(e) => removeFile(e, idx)}
                    className="text-sg-text-muted hover:text-sg-red transition-colors ml-2"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
