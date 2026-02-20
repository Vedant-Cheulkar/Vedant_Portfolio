import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Vedant Cheulkar - Developer & Tester';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: '#0a0a0a',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <h1 style={{ fontSize: 60, fontWeight: 'bold', marginBottom: 20 }}>Vedant Cheulkar</h1>
                    <p style={{ fontSize: 30, color: '#888' }}>Developer & Tester</p>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
