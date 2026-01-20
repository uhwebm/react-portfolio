export interface Config {
    status: {
        state: 'available' | 'busy' | 'commissions_only';
        available: { label: string; color: string };
        busy: { label: string; color: string };
        commissions_only: { label: string; color: string };
    };
}

export function getStatusColor(colorName: string): string {
    switch (colorName) {
        case 'emerald': return 'bg-emerald-500';
        case 'red': return 'bg-red-500';
        case 'yellow': return 'bg-yellow-500';
        default: return 'bg-emerald-500';
    }
}

export function getStatusTextColor(colorName: string): string {
    switch (colorName) {
        case 'emerald': return 'text-emerald-400';
        case 'red': return 'text-red-400';
        case 'yellow': return 'text-yellow-400';
        default: return 'text-emerald-400';
    }
}
