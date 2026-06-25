import { getAllArticles } from '@/lib/articles'
import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'

const CATEGORIES = [
  { key: 'school', label: 'スクール比較', icon: '🏫', desc: 'おすすめスクールを徹底比較', color: 'from-violet-500 to-purple-600' },
  { key: 'language', label: '言語選び', icon: '💻', desc: '目的別おすすめ言語', color: 'from-cyan-500 to-blue-600' },
  { key: 'career', label: '転職・キャリア', icon: '🚀', desc: 'エンジニア転職の成功法', color: 'from-orange-500 to-red-500' },
  { key: 'beginner', label: '初心者向け', icon: '🌱', desc: 'ゼロから始める学習法', color: 'from-green-500 to-emerald-500' },
]

export default function Home() {
  const articles = getAllArticles()

  return (
    <div>
      <section className="bg-gradient-to-b from-violet-700 to-purple-800 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            未経験からエンジニアへ。<br className="md:hidden" />最適なスクールが見つかる。
          </h1>
          <p className="text-violet-100 text-lg md:text-xl max-w-2xl mx-auto">
            プログラミングスクールの料金・カリキュラム・転職実績を<br className="hidden md:block" />
            徹底比較。あなたに合ったスクール選びをサポート。
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 -mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.key}
              href={`/category/${cat.key}`}
              className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all text-center group"
            >
              <div className={`bg-gradient-to-br ${cat.color} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3`}>
                <span className="text-xl">{cat.icon}</span>
              </div>
              <h3 className="font-bold text-sm text-gray-900 group-hover:text-violet-700 transition-colors">{cat.label}</h3>
              <p className="text-xs text-gray-400 mt-1">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-2">
          <span className="w-1 h-6 bg-violet-700 rounded-full"></span>
          最新記事
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </div>
  )
}
