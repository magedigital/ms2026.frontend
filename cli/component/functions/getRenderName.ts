export default function getRenderName(name: string): string {
    return `render${name[0].toUpperCase()}${name.slice(1)}`;
}
