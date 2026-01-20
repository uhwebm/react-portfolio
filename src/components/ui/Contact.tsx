"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Gamepad2, MessagesSquare, Check, Copy, ExternalLink, ArrowRight, LucideIcon } from 'lucide-react';
import { Config, getStatusTextColor, getStatusColor } from '@/lib/config-client';

const SocialRow = ({ 
    icon: Icon, 
    label, 
    value, 
    action, 
    onAction,
    isLink = false,
    colorClass
}: {
    icon: LucideIcon, label: string, value: string, action: string, onAction: () => void, isLink?: boolean, colorClass: string
}) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if (!isLink) {
            onAction();
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } else {
            onAction();
        }
    };

    return (
        <div className="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 p-4 transition-all hover:bg-white/10 hover:border-white/10">
            <div className="flex items-center gap-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${colorClass} opacity-80 group-hover:opacity-100 transition-opacity`}>
                    <Icon size={20} className="text-white" />
                </div>
                <div className="text-left">
                    <div className="text-sm font-medium text-white">{label}</div>
                    <div className="text-xs text-neutral-400">{value}</div>
                </div>
            </div>

            {isLink ? (
                <button 
                    onClick={onAction}
                    title={action}
                    aria-label={action}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/20 text-neutral-400 transition-colors hover:bg-white hover:text-black group-hover:border-white"
                >
                    <ExternalLink size={16} />
                </button>
            ) : (
                <button 
                    onClick={handleCopy}
                    title={action}
                    aria-label={action}
                    className="relative flex h-10 items-center justify-center rounded-full border border-white/10 bg-black/20 px-4 text-xs font-medium text-neutral-400 transition-colors hover:bg-white hover:text-black group-hover:border-white"
                >
                    {copied ? (
                        <span className="flex items-center gap-1.5"><Check size={14} /> Copied</span>
                    ) : (
                        <span className="flex items-center gap-1.5"><Copy size={14} /> {action}</span>
                    )}
                </button>
            )}
        </div>
    );
};

interface ContactProps {
    status: Config['status'];
}

export const Contact = ({ status }: ContactProps) => {
    const currentState = status[status.state];
    const colorTextColor = getStatusTextColor(currentState.color);
    const colorBgColor = getStatusColor(currentState.color);

    return (
        <section id="contact" className="py-24 px-6">
             <div className="mx-auto max-w-6xl">
                <div className="grid gap-16 lg:grid-cols-2 lg:gap-8 items-center">
                    
                    {/* Left Column: Text & Context */}
                    <div className="text-center lg:text-left">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className={`mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium ${colorTextColor}`}>
                                <span className="relative flex h-2 w-2">
                                <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${colorBgColor}`}></span>
                                <span className={`relative inline-flex h-2 w-2 rounded-full ${colorBgColor}`}></span>
                                </span>
                                {currentState.label}
                            </span>
                            
                            <h2 className="mb-6 text-4xl font-serif text-white md:text-5xl lg:text-6xl leading-tight">
                                Let&apos;s build something <span className="italic text-neutral-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">extraordinary.</span>
                            </h2>
                            
                            <p className="mb-10 text-lg text-neutral-400 font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
                                Whether you have a specific project or just a loose idea, I&apos;m here to help turn it into a refined, high-performance reality.
                            </p>

                            <div className="flex flex-col gap-6 text-sm text-neutral-500 font-medium max-w-sm mx-auto lg:mx-0">
                                <div className="flex items-center gap-3">
                                    <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
                                    <span>Typically replies in &lt; 2 hours</span>
                                    <div className="h-px flex-1 bg-gradient-to-l from-white/20 to-transparent lg:hidden"></div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Interaction Hub */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative mx-auto w-full max-w-md"
                    >
                        {/* Decorative glow */}
                        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent blur-xl opacity-20"></div>

                        <div className="relative flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-2xl overflow-hidden text-left">
                             {/* Header */}
                            <div className="mb-2 flex items-center justify-between border-b border-white/5 pb-4">
                                <span className="text-sm font-medium text-white">Connection Protocol</span>
                                <div className="flex gap-1.5">
                                    <div className="h-2 w-2 rounded-full bg-red-500/50"></div>
                                    <div className="h-2 w-2 rounded-full bg-yellow-500/50"></div>
                                    <div className="h-2 w-2 rounded-full bg-green-500/50"></div>
                                </div>
                            </div>

                            <div className="relative mt-8 group">
                                <div className="absolute right-0 bottom-full z-10 -mb-[1px] flex w-auto items-center justify-center rounded-t-lg border-x border-t border-yellow-500/20 bg-yellow-500/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-yellow-500 group-hover:bg-yellow-500/20 transition-colors">
                                    Recommended
                                </div>
                                <div className="relative z-20 rounded-2xl p-0.5 rounded-tr-none border border-yellow-500/20 bg-yellow-500/5 group-hover:bg-yellow-500/10 transition-colors">
                                    <SocialRow 
                                        icon={MessageCircle} 
                                        label="Discord" 
                                        value="Message"
                                        action="Visit"
                                        isLink
                                        onAction={() => window.open('https://discord.com/users/1221457893522669662', '_blank')}
                                        colorClass="from-indigo-500 to-purple-600"
                                    />
                                </div>
                            </div>
                            
                            <SocialRow 
                                icon={Gamepad2} 
                                label="Roblox" 
                                value="View Profile"
                                action="Visit"
                                isLink
                                onAction={() => window.open('https://www.roblox.com/users/5048508312/profile', '_blank')}
                                colorClass="from-emerald-500 to-teal-600"
                            />

                            <SocialRow 
                                icon={MessagesSquare} 
                                label="DevForum" 
                                value="Read Posts"
                                action="Visit"
                                isLink
                                onAction={() => window.open('https://devforum.roblox.com/u/uhwebm/summary', '_blank')}
                                colorClass="from-blue-500 to-cyan-600"
                            />
                            
                            <a 
                                href="mailto:uhwebm.business@protonmail.com"
                                className="group mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-sm font-bold text-black transition-transform active:scale-95 hover:bg-neutral-200"
                            >
                                Send Email <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>
                    </motion.div>
                </div>
             </div>
        </section>
    );
};
