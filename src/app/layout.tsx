import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'プログラミングスクールナビ｜未経験からエンジニアへ',
    template: '%s｜プログラミングスクールナビ',
  },
  description: 'プログラミングスクールを徹底比較。料金・カリキュラム・転職サポートで、未経験からエンジニア転職を実現する最適なスクールが見つかる。',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: 'プログラミングスクールナビ',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-gray-50 text-gray-900 antialiased min-h-screen flex flex-col">
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9320888355424356" crossOrigin="anonymous" strategy="afterInteractive" />
        <header className="border-b border-gray-200 sticky top-0 bg-white z-50 shadow-sm">
          <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <span className="bg-violet-600 text-white text-sm font-bold px-2.5 py-1 rounded">PROG</span>
              <span className="text-xl font-bold text-gray-900">スクールナビ</span>
            </a>
            <nav className="hidden md:flex gap-1 text-sm">
              <a href="/category/school" className="px-3 py-2 rounded-lg text-gray-600 hover:bg-violet-50 hover:text-violet-700 transition-colors">スクール比較</a>
              <a href="/category/language" className="px-3 py-2 rounded-lg text-gray-600 hover:bg-violet-50 hover:text-violet-700 transition-colors">言語選び</a>
              <a href="/category/career" className="px-3 py-2 rounded-lg text-gray-600 hover:bg-violet-50 hover:text-violet-700 transition-colors">転職・キャリア</a>
              <a href="/category/beginner" className="px-3 py-2 rounded-lg text-gray-600 hover:bg-violet-50 hover:text-violet-700 transition-colors">初心者向け</a>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="bg-white border-t border-gray-200 mt-16">
          <div className="max-w-5xl mx-auto px-4 py-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="bg-violet-600 text-white text-xs font-bold px-2 py-0.5 rounded">PROG</span>
                <span className="text-sm font-bold text-gray-900">スクールナビ</span>
              </div>
              <nav className="flex gap-6 text-xs text-gray-400">
                <a href="/category/school" className="hover:text-gray-600">スクール比較</a>
                <a href="/category/language" className="hover:text-gray-600">言語選び</a>
                <a href="/category/career" className="hover:text-gray-600">転職・キャリア</a>
              </nav>
            </div>
            <nav className="flex justify-center gap-6 text-xs text-gray-400 mt-4">
              <a href="/privacy" className="hover:text-gray-600">プライバシーポリシー</a>
              <a href="/contact" className="hover:text-gray-600">お問い合わせ</a>
            </nav>
            <p className="text-center text-xs text-gray-300 mt-4">© 2026 プログラミングスクールナビ All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
