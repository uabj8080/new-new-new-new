import { GetServerSideProps } from 'next';

type Repo = {
    name: string;
    description: string;
}

type RepositoriesProps = {
    repos: Repo[];
}

export default function Repositories({ repos }: RepositoriesProps) {    
    return (
        <div>
            <h1>repos</h1>
            <dl>
                {repos.map(repo => (
                <div key={repo.name}>
                    <dt>{repo.name}</dt>
                    <dd>{repo.description}</dd>
                </div>
                ))}
            </dl>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const response = await fetch('https://api.github.com/orgs/rocketseat/repos');
    const data = await response.json();
    
    return {
        props: {
            repos: data
        }
    }
}
