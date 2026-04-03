window.ymId = 96457356;

export default function sendGoal(name: string, isWin?: boolean): void {
    if (!window.ym) {
        return;
    }

    const source = localStorage.getItem('utmSource');

    if (isWin && source !== 'winbox' && source !== 'advcake') {
        return;
    }

    name.split(',').forEach((key) => {
        window.ym!(window.ymId, 'reachGoal', key.replace(/\s/gi, ''));
    });
}
