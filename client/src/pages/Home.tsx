import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Design: Tech-Forward Minimalism
 * - Paleta: Azul profundo (#0F172A), Ciano (#06B6D4), Violeta (#A78BFA)
 * - Tipografia: Poppins para títulos, Inter para corpo
 * - Layout: Assimétrico, responsivo, com cards flutuantes
 * - Animações: Fade-in, slide-up, hover effects suaves
 */

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white text-foreground overflow-hidden">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-violet-500 bg-clip-text text-transparent">
            Davi Meurer
          </div>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="text-sm font-medium text-foreground hover:text-cyan-500 transition-colors"
            >
              Contato
            </a>
            <a
              href="#skills"
              className="text-sm font-medium text-foreground hover:text-cyan-500 transition-colors"
            >
              Habilidades
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className={`relative min-h-[600px] flex items-center justify-center overflow-hidden transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage:
            "url('https://private-us-east-1.manuscdn.com/sessionFile/rhC0bjMWynn8LG3tO3oIdB/sandbox/bgCGvlnExBC4532wt0zckz-img-1_1772067391000_na1fn_aGVyb19haV9iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcmhDMGJqTVd5bm44TEczdE8zb0lkQi9zYW5kYm94L2JnQ0d2bG5FeEJDNDUzMnd0MHpja3otaW1nLTFfMTc3MjA2NzM5MTAwMF9uYTFmbl9hR1Z5YjE5aGFWOWlZV05yWjNKdmRXNWsucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=rNpv8xKUyuCi3GF1UHuRUrhM3iSwayd9bnM9VH-q8Upu5O~idL2YKUxxu-opZnvFSCR4sgaga1gtnqOV9NLjBH1U0K0xIqtdxABo-PAsbQ973UBRicqidiQvMK6MFo2IUrZiOFqTdeBK2EaqsO-pCDlWhVby2OSztZQkiJOvxpUbvC4OqUNEqsxtbFfD~tRRKJqHGVK~M5CAXAjMnAFaF0V0-VUef4wCqdi-Ld1CUcYlhtR~v-yEcSOSwml75jzmMKTyPAXHASJVRcoyjucoEo5Q5TIcXczLoY8recW15yPwgicTOjRtpJ2JK081JKDJ4bi4XK-s5ySEOcs1WgogYA__')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Davi Romauski Meurer
          </h1>
          <p className="text-xl sm:text-2xl text-cyan-300 mb-4 font-medium">
            Engenheiro de Software | Entusiasta de IA
          </p>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Buscando oportunidades desafiadoras em empresas de tecnologia, especialmente no campo da Inteligência Artificial. Proativo, com habilidades de comunicação e resolução de problemas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Entrar em Contato
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
              onClick={() =>
                document
                  .getElementById("experience")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Ver Experiência
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-8">
            Entusiasmo por <span className="text-cyan-500">Inteligência Artificial</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Como um grande entusiasta de Inteligência Artificial, acompanho ativamente as últimas tendências e avanços na área, desde modelos de linguagem (LLMs) como ChatGPT e Claude, até ferramentas de geração de imagem (Midjourney) e vídeo (Runway, Pika Labs).
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Tenho grande interesse em entender como a IA pode otimizar processos, criar novas soluções e impactar positivamente diversos setores. Busco uma oportunidade para aplicar meu conhecimento e paixão em um ambiente que promova o desenvolvimento e a inovação em IA.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12">
            Experiência <span className="text-cyan-500">Profissional</span>
          </h2>

          <div className="space-y-8">
            {/* Experience Card 1 */}
            <div className="bg-white rounded-lg p-8 border border-border hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Analista de Atendimento ERP
                  </h3>
                  <p className="text-cyan-500 font-medium">CISS - Gestão para o Varejo</p>
                </div>
                <span className="text-sm text-muted-foreground bg-slate-100 px-4 py-2 rounded-full">
                  Abril/2021 – Atualmente
                </span>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <span>
                    Atendimento e suporte a usuários de sistema ERP para o varejo, realizando análise de chamados e resolução de problemas.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <span>
                    Registro e acompanhamento de tickets, garantindo a eficiência e a satisfação do cliente.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <span>
                    Suporte a dúvidas sobre processos do sistema, contribuindo para a otimização das operações dos clientes.
                  </span>
                </li>
              </ul>
            </div>

            {/* Experience Card 2 */}
            <div className="bg-white rounded-lg p-8 border border-border hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Jovem Aprendiz</h3>
                  <p className="text-cyan-500 font-medium">Correios</p>
                </div>
                <span className="text-sm text-muted-foreground bg-slate-100 px-4 py-2 rounded-full">
                  Março/2018 – Março/2019
                </span>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <span>Apoio em rotinas administrativas e organização de documentos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <span>
                    Atendimento ao público e suporte em atividades internas da agência.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12">
            Formação <span className="text-cyan-500">Acadêmica</span>
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-cyan-500 pl-6 py-4">
              <h3 className="text-2xl font-bold text-foreground">
                Bacharelado em Engenharia de Software
              </h3>
              <p className="text-cyan-500 font-medium mb-2">
                Universidade Tecnológica Federal do Paraná (UTFPR)
              </p>
              <p className="text-muted-foreground">Cursando desde o segundo semestre de 2019</p>
            </div>

            <div className="border-l-4 border-violet-500 pl-6 py-4">
              <h3 className="text-2xl font-bold text-foreground">Ensino Médio Geral</h3>
              <p className="text-violet-500 font-medium mb-2">
                Colégio Estadual Doutor Arnaldo Busato
              </p>
              <p className="text-muted-foreground">Fevereiro/2016 – Dezembro/2018</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12">
            Habilidades <span className="text-cyan-500">Técnicas</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Skills Grid */}
            {[
              { title: "Sistemas", items: ["ERP (Suporte e Análise)", "Windows Server"] },
              {
                title: "Programação",
                items: ["Lógica de Programação", "Web e Mobile (Conceitos)"],
              },
              {
                title: "Hardware",
                items: ["Manutenção de Celulares", "Hardware Avançado", "Servidores"],
              },
              {
                title: "Soft Skills",
                items: [
                  "Atendimento ao Cliente",
                  "Resolução de Problemas",
                  "Comunicação",
                  "Proatividade",
                ],
              },
            ].map((skillGroup, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 border border-border hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full" />
                  {skillGroup.title}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((item, i) => (
                    <li key={i} className="text-muted-foreground">
                      ✓ {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12">
            Cursos <span className="text-cyan-500">Extracurriculares</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Programador Web e Mobile (SENAI/SUDOTEC)",
              "Treinamento em Inglês – Startup 2 (Liberty Language Center)",
              "Manutenção em Celulares (Udemy)",
              "Hardware Avançado (Visão Do Futuro)",
              "Administrando Servidores 2012 (AulaEAD)",
              "Empreendedorismo (Núcleo Regional de Educação)",
            ].map((course, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-border"
              >
                <span className="text-cyan-500 text-xl">→</span>
                <span className="text-foreground">{course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Vamos <span className="text-cyan-400">Trabalhar Juntos?</span>
          </h2>
          <p className="text-lg text-slate-300 mb-12">
            Estou aberto a oportunidades em empresas de IA. Entre em contato comigo!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a
              href="tel:+5546999007451"
              className="bg-white/10 hover:bg-white/20 transition-colors p-6 rounded-lg border border-white/20"
            >
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <p className="text-white font-medium">(46) 99900-7451</p>
            </a>

            <a
              href="mailto:daviromauski@gmail.com"
              className="bg-white/10 hover:bg-white/20 transition-colors p-6 rounded-lg border border-white/20"
            >
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <p className="text-white font-medium">daviromauski@gmail.com</p>
            </a>

            <div className="bg-white/10 p-6 rounded-lg border border-white/20">
              <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <p className="text-white font-medium">Cruzeiro do Iguaçu - PR</p>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <Button
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg"
              onClick={() => (window.location.href = "mailto:daviromauski@gmail.com")}
            >
              Enviar E-mail
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
              onClick={() => (window.location.href = "tel:+5546999007451")}
            >
              Ligar
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 text-center">
        <p className="text-slate-400">
          © 2026 Davi Romauski Meurer. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
