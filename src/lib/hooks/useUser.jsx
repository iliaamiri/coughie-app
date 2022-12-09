import {useEffect, useState} from "preact/hooks";

export function useUser({ redirectIfNotSetup } = { redirectIfNotSetup: true }) {
    const [user, setUser] = useState(null);
    const [isUserSetup, setIsUserSetup] = useState(false);

    useEffect(() => {
        const raw = localStorage.getItem("user");
        if (!raw) {
            if (redirectIfNotSetup) {
                window.location.href = "/";
            }
            return;
        }
        const user = JSON.parse(raw);
        if (user.step < 4 && redirectIfNotSetup) {
            window.location.href = "/";
            return;
        }

        setUser(user);
        setIsUserSetup(true);
    }, []);

    return [user, isUserSetup];
}