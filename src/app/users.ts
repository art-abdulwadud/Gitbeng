export interface Users {
    id: number;
    avatar_url: string;
    login: string;
    bio: string;
    location: string;
    followers: number;
    following: number;
}

export interface Repos {
    id: number;
    html_url: string;
    description: string;
    name: string;
    language: string;
    watchers: number;
    folks: number;
}