import { GeistSans } from 'geist/font/sans';
import { JetBrains_Mono as FontMono, Karla } from 'next/font/google';

export const fontSans = GeistSans;

export const fontMono = FontMono({
    subsets: ['latin'],
});

export const fontKarla = Karla({
    subsets: ['latin'],
});
