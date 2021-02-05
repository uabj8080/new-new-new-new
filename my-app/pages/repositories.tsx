import { useEffect, useState } from 'react';

type Repo = {
    name: string;
    description: string;
}

export default function Repositories() {
    const [ repos, setRepos ] = useState<Repo[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then((data) => setRepos(data))
    },[]);

    return (
        <div>
            <h1>repos</h1>
            <dl>
                {repos.map(repo => (
                <div>
                    <dt key={repo.name}>{repo.name}</dt>
                    <dd>{repo.description}</dd>
                </div>
                ))}
            </dl>
        </div>
    )
}
