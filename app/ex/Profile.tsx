import Avatar from './Avatar'

function Card({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='card'>
            {children}
        </div>
    );
}
export default function Profile() {
    return (
        <>
            <Card>
                <Avatar />
            </Card>
        </>
    );
}