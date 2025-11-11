import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Zap, Target, Award } from "lucide-react";
import { APP_TITLE, getLoginUrl } from "@/const";

export default function Home() {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">✓</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900">{APP_TITLE}</h1>
          </div>
          <div className="flex gap-4">
            {isAuthenticated ? (
              <>
                <span className="text-sm text-slate-600 py-2">Bem-vindo, {user?.name}</span>
                <Button variant="outline" onClick={logout}>
                  Sair
                </Button>
              </>
            ) : (
              <Button onClick={() => (window.location.href = getLoginUrl())}>
                Entrar
              </Button>
            )}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Trabalho Bem Feito
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Excelência técnica, precisão absoluta e dedicação em cada detalhe. Descubra como transformamos componentes em obras-primas de engenharia.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Saiba Mais
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                Contato
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-16 text-slate-900">
            Nossos Princípios
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <Target className="w-12 h-12 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-center mb-4 text-slate-900">
                Precisão
              </h4>
              <p className="text-slate-600 text-center">
                Cada componente é tratado com exatidão milimétrica, garantindo perfeição absoluta.
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <Zap className="w-12 h-12 text-amber-600" />
              </div>
              <h4 className="text-xl font-bold text-center mb-4 text-slate-900">
                Eficiência
              </h4>
              <p className="text-slate-600 text-center">
                Processos otimizados que maximizam o desempenho e minimizam desperdícios.
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-center mb-4 text-slate-900">
                Qualidade
              </h4>
              <p className="text-slate-600 text-center">
                Padrões rigorosos de controle garantem produtos de excelência duradoura.
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <Award className="w-12 h-12 text-purple-600" />
              </div>
              <h4 className="text-xl font-bold text-center mb-4 text-slate-900">
                Excelência
              </h4>
              <p className="text-slate-600 text-center">
                Compromisso inabalável com a superação de expectativas em tudo que fazemos.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-16 text-slate-900">
            Trabalho em Ação
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all">
              <img
                src="/precision-work.png"
                alt="Trabalho de Precisão"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-xl font-bold">Precisão Técnica</h4>
                  <p className="text-sm text-gray-200">Montagem meticulosa de componentes</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all">
              <img
                src="/restored-compressor.png"
                alt="Compressor Restaurado"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-xl font-bold">Recondicionamento</h4>
                  <p className="text-sm text-gray-200">Compressor restaurado com qualidade de novo</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all">
              <img
                src="/technical-success.png"
                alt="Sucesso Técnico"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-xl font-bold">Competência</h4>
                  <p className="text-sm text-gray-200">Profissionais dedicados ao trabalho bem feito</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6">
            Pronto para Experienciar a Excelência?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Junte-se a nós na jornada pela perfeição técnica e qualidade incomparável.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            Comece Agora
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">Sobre</h4>
              <p className="text-sm">Dedicados à excelência em cada projeto, transformando ideias em realidade com precisão e qualidade.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contato</h4>
              <p className="text-sm">Email: contato@trabalhobemfeito.com</p>
              <p className="text-sm">Telefone: +55 (00) 0000-0000</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Redes Sociais</h4>
              <p className="text-sm">Siga-nos para as últimas atualizações e projetos.</p>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-sm">
            <p>&copy; 2025 Trabalho Bem Feito. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
