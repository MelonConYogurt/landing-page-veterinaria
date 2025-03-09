import {useState} from "react";
import {Button} from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Heart,
  Stethoscope,
  Syringe,
  Scissors,
  PawPrint,
  Facebook,
  Instagram,
  Twitter,
  Star,
  X,
} from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Inicio() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  function handleMenu() {
    setIsMenuActive((prev) => !prev);
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 px-5 z-40 w-full border-b bg-background">
        <div className="flex w-full h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <PawPrint className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Veterinaria</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a
              href="#inicio"
              className="text-sm font-medium hover:text-primary"
            >
              Inicio
            </a>
            <a
              href="#servicios"
              className="text-sm font-medium hover:text-primary"
            >
              Servicios
            </a>
            <a
              href="#nosotros"
              className="text-sm font-medium hover:text-primary"
            >
              Nosotros
            </a>
            <a
              href="#testimonios"
              className="text-sm font-medium hover:text-primary"
            >
              Testimonios
            </a>
            <a
              href="#contacto"
              className="text-sm font-medium hover:text-primary"
            >
              Contacto
            </a>
          </nav>
          <Button
            className="hidden md:inline-flex  bg-[#fff05f] border-none hover:bg-[#ffe82b"
            variant={"outline"}
          >
            <a href="#citas">Agendar Cita</a>
          </Button>
          <Button
            onClick={handleMenu}
            variant="outline"
            size="icon"
            className="md:hidden bg-[#fff05f] border-none hover:bg-[#ffe82b] transition-all duration-200 hover:scale-105"
          >
            {isMenuActive ? (
              <X className="h-5 w-5 text-black" />
            ) : (
              <PawPrint className="h-5 w-5 text-black" />
            )}
            <span className="sr-only">Menú</span>
          </Button>

          {isMenuActive && (
            <nav className="border shadow-lg p-4 flex flex-col gap-3 rounded-lg fixed top-16 right-4 bg-white/95 backdrop-blur-sm transition-all duration-300 animate-in slide-in-from-top-5 z-50 w-48">
              <a
                href="#inicio"
                className="text-sm font-medium hover:text-primary flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors"
                onClick={handleMenu}
              >
                <PawPrint className="h-4 w-4" />
                Inicio
              </a>
              <a
                href="#servicios"
                className="text-sm font-medium hover:text-primary flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors"
                onClick={handleMenu}
              >
                <Stethoscope className="h-4 w-4" />
                Servicios
              </a>
              <a
                href="#nosotros"
                className="text-sm font-medium hover:text-primary flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors"
                onClick={handleMenu}
              >
                <Heart className="h-4 w-4" />
                Nosotros
              </a>
              <a
                href="#testimonios"
                className="text-sm font-medium hover:text-primary flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors"
                onClick={handleMenu}
              >
                <Star className="h-4 w-4" />
                Testimonios
              </a>
              <a
                href="#contacto"
                className="text-sm font-medium hover:text-primary flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors"
                onClick={handleMenu}
              >
                <Mail className="h-4 w-4" />
                Contacto
              </a>
              <Button className="mt-2 w-full bg-[#fff05f] text-black hover:bg-[#ffe82b] transition-colors border-none">
                <a href="#citas" onClick={handleMenu}>
                  Agendar Cita
                </a>
              </Button>
            </nav>
          )}
        </div>
      </header>

      <main className="flex flex-col justify-center items-center">
        <section
          id="inicio"
          className="w-full flex  justify-center items-center py-12 md:py-24 lg:py-32 bg-muted/50"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Cuidado experto para tu mascota
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    En PetCare Veterinaria, nos dedicamos a proporcionar
                    atención médica de calidad y cariño a tus mascotas.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    variant={"outline"}
                    className=" bg-[#fff05f] border-none hover:bg-[#ffe82b"
                  >
                    <a href="#citas">Agendar Cita</a>
                  </Button>
                  <Button size="lg" variant="outline">
                    <a href="#servicios"> Nuestros Servicios</a>
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Heart className="h-4 w-4 text-primary" />
                    <span>Atención con amor</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Stethoscope className="h-4 w-4 text-primary" />
                    <span>Médicos certificados</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Carousel>
                  <CarouselContent>
                    <CarouselItem>
                      <img src="/header.png" alt="" className="rounded-md" />
                    </CarouselItem>
                    <CarouselItem>
                      <img src="/header2.png" alt="" className="rounded-md" />
                    </CarouselItem>
                    <CarouselItem>
                      <img src="/header3.png" alt="" className="rounded-md" />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
          </div>
        </section>

        <section
          id="servicios"
          className="w-full flex flex-col justify-center items-center py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6 flex flex-col justify-center items-center">
            <div className="flex flex-col items-center justify-center space-y-4 text-center"></div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center">
                Nuestros Servicios
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ofrecemos una amplia gama de servicios veterinarios para
                mantener a tu mascota saludable y feliz.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-150">
              <div className="p-2 bg-primary/10 rounded-full">
                <Stethoscope className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Consultas</h3>
              <p className="text-center text-muted-foreground">
                Exámenes completos y diagnósticos precisos para tu mascota.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-150">
              <div className="p-2 bg-primary/10 rounded-full">
                <Syringe className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Vacunación</h3>
              <p className="text-center text-muted-foreground">
                Protección preventiva contra enfermedades comunes.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-150">
              <div className="p-2 bg-primary/10 rounded-full">
                <Scissors className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Peluquería</h3>
              <p className="text-center text-muted-foreground">
                Servicios de estética y cuidado del pelaje para tu mascota.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-150">
              <div className="p-2 bg-primary/10 rounded-full">
                <PawPrint className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Cirugía</h3>
              <p className="text-center text-muted-foreground">
                Procedimientos quirúrgicos con equipos de última generación.
              </p>
            </div>
          </div>
        </section>

        <section
          id="nosotros"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 flex flex-row justify-center items-center"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex items-center justify-center">
                <img
                  src="/veterinarios.png"
                  alt="Equipo de veterinarios"
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Sobre Nosotros
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                    Con más de 15 años de experiencia, nuestro equipo de
                    veterinarios certificados está comprometido con la salud y
                    el bienestar de tus mascotas.
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    <span>Atención personalizada para cada mascota</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Stethoscope className="h-5 w-5 text-primary" />
                    <span>Equipo médico altamente calificado</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <PawPrint className="h-5 w-5 text-primary" />
                    <span>Instalaciones modernas y equipadas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Atención de emergencias 24/7</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="testimonios"
          className="w-full py-12 md:py-24 lg:py-32 flex flex-col justify-center items-center"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center ">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Lo que dicen nuestros clientes
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Descubre por qué tantas familias confían en nosotros para el
                  cuidado de sus mascotas.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col justify-between space-y-4 border rounded-lg p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-150">
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    "El cuidado que recibió mi perro fue excepcional. Los
                    veterinarios son muy profesionales y cariñosos con las
                    mascotas."
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src="/cliente1.png"
                    alt="Cliente"
                    className="rounded-full w-20 h-20 object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium">María García</p>
                    <p className="text-xs text-muted-foreground">
                      Dueña de Max
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 border rounded-lg p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-150">
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    "Siempre encuentro un trato amable y profesional. Mi gata ha
                    mejorado mucho desde que la llevamos a esta clínica."
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src="/cliente2.png"
                    alt="Cliente"
                    className="rounded-full w-20 h-20 object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium">Carlos Rodríguez</p>
                    <p className="text-xs text-muted-foreground">
                      Dueño de Luna
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 border rounded-lg p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-150">
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    "La atención de emergencia salvó la vida de mi mascota.
                    Estaré eternamente agradecida con todo el equipo."
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src="/cliente3.png"
                    alt="Cliente"
                    className="rounded-full w-20 h-20 object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium">Ana Martínez</p>
                    <p className="text-xs text-muted-foreground">
                      Dueña de Rocky
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contacto"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 flex flex-row justify-center items-center"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Contáctanos
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                    Estamos aquí para responder tus preguntas y programar citas
                    para tus mascotas.
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+123 456 7890</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>correo@correo.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Av. Principal, Ciudad</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Lunes a Sábado: 9:00 AM - 7:00 PM</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button size="icon" variant="outline">
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </Button>
                  <Button size="icon" variant="outline">
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Button>
                  <Button size="icon" variant="outline">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center" id="citas">
                <div className="w-full max-w-md space-y-4 border rounded-lg p-6 bg-background shadow-sm">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Agenda una cita</h3>
                    <p className="text-sm text-muted-foreground">
                      Completa el formulario y nos pondremos en contacto contigo
                      lo antes posible.
                    </p>
                  </div>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="nombre" className="text-sm font-medium">
                          Nombre
                        </label>
                        <input
                          id="nombre"
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="telefono"
                          className="text-sm font-medium"
                        >
                          Teléfono
                        </label>
                        <input
                          id="telefono"
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                          placeholder="Tu teléfono"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        placeholder="Tu email"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="mascota" className="text-sm font-medium">
                        Tipo de mascota
                      </label>
                      <select
                        id="mascota"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option value="">Selecciona una opción</option>
                        <option value="perro">Perro</option>
                        <option value="gato">Gato</option>
                        <option value="ave">Ave</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="mensaje" className="text-sm font-medium">
                        Mensaje
                      </label>
                      <textarea
                        id="mensaje"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm min-h-[100px]"
                        placeholder="Describe brevemente el motivo de tu visita"
                      />
                    </div>
                    <Button
                      type="submit"
                      variant={"outline"}
                      className="w-full  bg-[#fff05f] border-none hover:bg-[#ffe82b"
                    >
                      Enviar solicitud
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full flex justify-between border-t py-6 md:py-0 px-5">
        <div className="flex flex-col items-center justify-between w-full gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Veterinaria. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
