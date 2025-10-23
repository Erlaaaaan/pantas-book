import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 px-8 lg:px-16 rounded-b-2xl" style={{backgroundColor: '#c7ae98'}}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Logo */}
          <div className="flex flex-col items-center md:items-start">
            <div className="text-center md:text-left">
              {/* Pantas Bookkeepers Logo */}
              <div className="mb-4 flex items-center gap-4">
                <Image
                  src="/images/logo.png"
                  alt="Pantas Bookkeepers Logo"
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
                <div>
                  <h2 className="text-6xl font-bold uppercase tracking-tight leading-none" style={{color: '#535466'}}>
                    Pantas
                  </h2>
                  <div className="w-full h-0.5 my-2" style={{backgroundColor: '#535466'}}></div>
                  <p className="text-lg font-medium uppercase tracking-wide" style={{color: '#535466'}}>
                    Bookkeepers
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Information */}
          <div className="space-y-4">
            {/* CRC Information */}
            <div className="font-medium" style={{color: '#535466'}}>
              CRC: SC-000450/0-0
            </div>

            {/* Description */}
            <p className="leading-relaxed max-w-md" style={{color: '#535466'}}>
              Escritório contábil em Jaraguá do Sul - Santa Catarina, baseado em confiança, 
              credibilidade, ética e qualidade em seus serviços. Confira nosso endereço
            </p>

            {/* Copyright */}
            <div className="text-sm mt-6" style={{color: '#535466'}}>
              <p>
                ISK Contabilidade © 2019 - Todos os direitos reservados |{" "}
                <span style={{color: '#716d73'}}>Cubbe Marketing & Inovallias</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
