interface ImportMetaEnv {
    readonly VITE_APP_NAME: string;
    // その他の環境変数をここに追加
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
