export interface ButtonProps {
    buttonLabel: string;
    buttonBackgroundColor: string;
    action: () => void;
}

export interface LayoutProps {
    children: React.ReactNode;
}

export interface PostProps {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface PageRouteProps {
    pageRoute: string;
}
