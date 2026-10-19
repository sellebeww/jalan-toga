import React from 'react';
import { Check } from 'lucide-react';

interface StepItem {
  number: number;
  title: string;
  desc?: string;
}

interface StepListProps {
  steps: (string | StepItem)[];
  currentStep?: number;
  className?: string;
}

export const StepList: React.FC<StepListProps> = ({ steps, currentStep, className = '' }) => {
  return (
    <div className={`relative pl-8 my-6 space-y-6 ${className}`}>
      {/* Vertical connection line */}
      <div className="absolute left-3.5 top-3 bottom-3 w-0.5 bg-slate-200 dark:bg-slate-800" />

      {steps.map((step, idx) => {
        const stepNum = typeof step === 'string' ? idx + 1 : step.number;
        const title = typeof step === 'string' ? step : step.title;
        const desc = typeof step === 'string' ? undefined : step.desc;
        const isCurrent = currentStep === stepNum;
        const isPast = currentStep !== undefined && currentStep > stepNum;

        return (
          <div key={idx} className="relative group">
            {/* Step badge node */}
            <div
              className={`absolute -left-8 top-0.5 w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold font-mono border-2 transition-colors ${
                isPast
                  ? 'bg-emerald-600 border-emerald-600 text-white'
                  : isCurrent
                  ? 'bg-indigo-600 border-indigo-600 text-white shadow-sm ring-4 ring-indigo-100 dark:ring-indigo-950/50'
                  : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300'
              }`}
            >
              {isPast ? <Check className="w-3.5 h-3.5" /> : stepNum}
            </div>

            <div className="pt-0.5">
              <h5 className="font-semibold text-slate-900 dark:text-slate-100 font-heading text-sm">
                {title}
              </h5>
              {desc && (
                <p className="text-slate-600 dark:text-slate-400 text-xs mt-1 leading-relaxed">
                  {desc}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
