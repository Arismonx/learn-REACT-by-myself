function Item({ name, isPacked }: {
    name: string
    isPacked: boolean
}) {
    return (
        <>
            <li>
                {name} {isPacked ? '✅' : '❌'}
            </li>
        </>
    );
}
export default function Condition() {
    return (
        <>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item
                    isPacked={true}
                    name="Space suit"
                />
                <Item
                    isPacked={true}
                    name="Helmet with a golden leaf"
                />
                <Item
                    isPacked={false}
                    name="Photo of Tam"
                />
            </ul>
        </>
    );
}