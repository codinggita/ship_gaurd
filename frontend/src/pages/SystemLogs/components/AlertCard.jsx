import React from 'react';
import { AlertTriangle, Activity, Info, Clock, MapPin, Box, X, Settings2, ExternalLink } from 'lucide-react';

export default function AlertCard({ alert }) {
  const { 
    type, 
    title, 
    description, 
    time, 
    location, 
    extraTag, 
    refId, 
    primaryAction, 
    secondaryAction,
    image
  } = alert;

  // Determine styling based on type
  const config = {
    critical: {
      borderColor: 'border-sg-red',
      iconColor: 'text-sg-red',
      bgColor: 'bg-sg-red/5',
      Icon: AlertTriangle,
      primaryBtnBg: 'bg-sg-red/20 text-sg-red hover:bg-sg-red hover:text-white',
      primaryBtnIcon: X,
      secondaryBtnIcon: ExternalLink
    },
    warning: {
      borderColor: 'border-[#FFB84D]', // Custom orange
      iconColor: 'text-[#FFB84D]',
      bgColor: 'bg-[#FFB84D]/5',
      Icon: Activity,
      primaryBtnBg: 'bg-transparent text-[#FFB84D] hover:bg-[#FFB84D]/10',
      primaryBtnIcon: Settings2,
      secondaryBtnIcon: X
    },
    info: {
      borderColor: 'border-sg-blue',
      iconColor: 'text-sg-blue',
      bgColor: 'bg-sg-blue/5',
      Icon: Info,
      primaryBtnBg: 'bg-transparent text-sg-blue hover:bg-sg-blue/10',
      primaryBtnIcon: ExternalLink,
      secondaryBtnIcon: null
    }
  }[type];

  const IconComponent = config.Icon;
  const PrimaryIcon = config.primaryBtnIcon;
  const SecondaryIcon = config.secondaryBtnIcon;

  return (
    <div className={`flex flex-col md:flex-row border-l-4 ${config.borderColor} bg-sg-black/50 overflow-hidden mb-4 relative`}>
      {/* Left Content Area */}
      <div className={`flex-1 p-6 ${config.bgColor}`}>
        <div className="flex items-center space-x-3 mb-4">
          <IconComponent className={`w-5 h-5 ${config.iconColor}`} />
          <h3 className="text-lg font-display uppercase tracking-wider text-white">
            {title}
          </h3>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {image && (
            <div className="w-24 h-24 bg-sg-card border border-sg-border shrink-0 p-2 flex items-center justify-center">
               <img src={image} alt="Alert context" className="max-w-full max-h-full object-contain opacity-70" />
            </div>
          )}
          <p className="text-xs text-sg-text-muted leading-relaxed font-mono">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {time && (
            <span className="flex items-center space-x-2 bg-sg-black border border-sg-border px-3 py-1.5 text-[10px] font-mono tracking-widest text-sg-text-muted">
              <Clock className="w-3 h-3" />
              <span>{time}</span>
            </span>
          )}
          {location && (
            <span className="flex items-center space-x-2 bg-sg-black border border-sg-border px-3 py-1.5 text-[10px] font-mono tracking-widest text-sg-text-muted">
              <MapPin className="w-3 h-3" />
              <span>{location}</span>
            </span>
          )}
          {extraTag && (
            <span className="flex items-center space-x-2 bg-sg-black border border-sg-border px-3 py-1.5 text-[10px] font-mono tracking-widest text-sg-text-muted">
              <Box className="w-3 h-3" />
              <span>{extraTag}</span>
            </span>
          )}
        </div>
      </div>

      {/* Right Action Area */}
      <div className="w-full md:w-64 bg-sg-card border-l border-sg-border flex flex-col justify-between p-4 shrink-0">
        <div className="text-right">
          <span className="text-[8px] font-mono tracking-widest text-sg-text-muted uppercase">
            SYS_REF: {refId}
          </span>
        </div>

        {type === 'info' && image ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 mt-4">
            <span className="text-[10px] font-mono tracking-widest text-sg-blue uppercase">
              DOCKING_NODE_VIEW
            </span>
            <div className="w-full h-20 bg-sg-black border border-sg-blue/30 relative overflow-hidden flex items-center justify-center">
              {/* Fake visual feed */}
              <div className="absolute inset-0 bg-sg-blue/10 animate-pulse"></div>
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-sg-blue/50"></div>
              <div className="absolute top-0 left-1/2 w-[1px] h-full bg-sg-blue/50"></div>
            </div>
            <button className={`w-full py-2 border border-sg-blue text-[10px] font-bold tracking-widest uppercase flex items-center justify-center gap-2 transition-colors ${config.primaryBtnBg}`}>
              {primaryAction}
            </button>
          </div>
        ) : (
          <div className="flex-1 flex flex-col justify-center space-y-4 mt-4">
            <button className={`w-full py-4 border ${config.borderColor} text-[10px] font-bold tracking-widest uppercase flex items-center justify-center gap-2 transition-colors ${config.primaryBtnBg}`}>
              {PrimaryIcon && <PrimaryIcon className="w-4 h-4" />}
              {primaryAction}
            </button>
            
            {secondaryAction && (
              <button className="w-full py-3 text-[10px] font-mono tracking-widest uppercase text-sg-text-muted hover:text-white flex items-center justify-center gap-2 transition-colors">
                {SecondaryIcon && <SecondaryIcon className="w-3 h-3" />}
                {secondaryAction}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
