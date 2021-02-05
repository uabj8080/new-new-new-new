import { GetStaticPaths, GetStaticProps } from 'next';

type Profile = {
    name: string;
    bio: string;
}

type ProfileProps = {
    profile: Profile;
}

export default function Profile({ profile }: ProfileProps) {    
    return (
        <div>
            <h1>perfil</h1>
            <dl>
                <dt>name: {profile.name}</dt>
                <dd>bio: {profile.bio}</dd>
            </dl>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { username: 'codeedu'}},
            { params: { username: 'rocketseat'}},
        ],
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { username } = params;

    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    
    return {
        props: {
            profile: data
        },
        revalidate: 10,
    }
}
