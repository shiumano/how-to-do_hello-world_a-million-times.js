import { execSync } from "child_process";

execSync(
    "yes 'Hello, World!' | head -n 1000000",
    { stdio: [0, 1, 2] }
);
