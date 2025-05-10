export class AnimationStyles {
    static getStyles() {
        return `
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-5px); }
                75% { transform: translateX(5px); }
            }

            @keyframes growMessage {
                0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
                50% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
                100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            }

            @keyframes fadeOutBackground {
                to { opacity: 0; }
            }

            @keyframes wave {
                0%, 100% { transform: rotate(0deg); }
                25% { transform: rotate(-10deg); }
                75% { transform: rotate(10deg); }
            }

            @keyframes float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-30px); }
            }

            @keyframes walk {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100vw); }
            }

            @keyframes moveBackground {
                0% { background-position: 0 0; }
                100% { background-position: -1000px 0; }
            }

            @keyframes twinkle {
                0%, 100% { opacity: 0.3; }
                50% { opacity: 1; }
            }

            @keyframes floatUp {
                0% { transform: translateY(100vh); }
                100% { transform: translateY(-100px); }
            }
        `;
    }

    static getResponsiveStyles() {
        return `
            @media screen and (max-width: 768px) {
                .registration-form {
                    width: 90% !important;
                    max-width: 400px !important;
                    padding: 20px !important;
                }

                .registration-form input[type="email"] {
                    font-size: 16px !important;
                    padding: 12px !important;
                }

                .registration-form button {
                    font-size: 16px !important;
                    padding: 12px 24px !important;
                }

                .thank-you-message {
                    font-size: 18px !important;
                    padding: 20px 30px !important;
                    width: 80% !important;
                }

                .waving-pencil {
                    transform: scale(0.8) !important;
                }

                .goodbye-message {
                    font-size: 16px !important;
                    margin-top: 20px !important;
                }

                .pencil-body {
                    width: 60px !important;
                    height: 200px !important;
                }

                .pencil-face {
                    width: 40px !important;
                    height: 40px !important;
                }

                .pencil-face .eye {
                    width: 6px !important;
                    height: 6px !important;
                }

                .pencil-face .smile {
                    width: 20px !important;
                    height: 10px !important;
                }
            }

            @media screen and (max-width: 480px) {
                .registration-form {
                    width: 95% !important;
                    padding: 15px !important;
                }

                .thank-you-message {
                    font-size: 16px !important;
                    padding: 15px 20px !important;
                    width: 90% !important;
                }

                .waving-pencil {
                    transform: scale(0.6) !important;
                }

                .goodbye-message {
                    font-size: 14px !important;
                    margin-top: 15px !important;
                }

                .pencil-body {
                    width: 50px !important;
                    height: 180px !important;
                }

                .pencil-face {
                    width: 35px !important;
                    height: 35px !important;
                }
            }
        `;
    }

    static getDarkWoodBackgroundStyle() {
        return `
            html, body, #main-content {
                background: #2b1a12 !important;
                background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23321c10' fill-opacity='0.18' fill-rule='evenodd'/%3E%3C/svg%3E") !important;
                background-size: 120px 120px !important;
                color: #fff !important;
            }
        `;
    }
} 