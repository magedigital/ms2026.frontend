export default function getComponentName(name: string): string {
    return `${name[0].toUpperCase()}${name.slice(1)}`;
}
