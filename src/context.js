import { createContext } from 'react';
// Context is designed to share data that can be considered “global” for a tree of React components
// (e.g. authenticated user, theme, language)
// Do not over use it: prefer props or use composition passing the component itself.
export const AuthContext = createContext({
    status: false,
    login: () => {}
});