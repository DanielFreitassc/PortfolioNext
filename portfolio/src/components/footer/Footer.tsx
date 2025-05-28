export default function Footer() {
  return (
    <footer className="bg-brand-background text-brand-gray border-t border-brand-gray">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Lado Esquerdo */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-white text-black text-xs font-bold px-1 rounded">DEV</span>
            <span className="text-lg font-mono">Daniel Freitas</span>
          </div>
          <p className="text-sm font-mono break-all">danielfreitassc@gmail.com</p>
          <p className="text-sm font-mono mt-1">Desenvolvedor</p>
          <p className="text-sm font-mono">Backend e DevSecOps</p>
        </div>

        {/* Lado Direito */}
        <div className="flex flex-col items-start md:items-end justify-between">
          <h2 className="text-lg font-mono mb-2">Mídias</h2>
          <div className="flex gap-4 mb-4">
            <a
              href="https://github.com/DanielFreitassc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github text-2xl hover:text-brand-pink transition-colors duration-200" />
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-freitas-26a8a8267/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin text-2xl hover:text-brand-pink transition-colors duration-200" />
            </a>
            <a
              href="https://gitlab.com/DanielFreitassc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitLab"
            >
              <i className="fab fa-gitlab text-2xl hover:text-brand-pink transition-colors duration-200" />
            </a>
          </div>
        </div>
      </div>

      {/* Rodapé */}
      <div className="text-center text-sm font-mono py-4 border-t border-brand-gray">
        © Copyright 2025. Made by Daniel Freitas
      </div>
    </footer>
  );
}
