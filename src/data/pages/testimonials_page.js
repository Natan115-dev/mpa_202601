function buildStars(rating) {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
}

const testimoniosBase = [
    {
        name: "Carlos Martínez",
        role: "Director de Marketing, Grupo Delta",
        avatar: "https://i.pravatar.cc/150?img=12",
        text: "Desde que integramos esta plataforma, nuestro tiempo de respuesta con clientes bajó a la mitad. La facilidad de uso es impresionante.",
        rating: 5
    },
    {
        name: "Ana Lucía Reyes",
        role: "Fundadora, Studio Reyes",
        avatar: "https://i.pravatar.cc/150?img=32",
        text: "El soporte al cliente es excelente y el sistema se adapta muy bien a las necesidades de un negocio pequeño como el mío.",
        rating: 5
    },
    {
        name: "Jorge Fuentes",
        role: "Gerente de Operaciones, LogiCorp",
        avatar: "https://i.pravatar.cc/150?img=62",
        text: "La curva de aprendizaje fue corta y en menos de una semana todo el equipo ya lo estaba usando sin problemas.",
        rating: 4
    },
    {
        name: "Mariana López",
        role: "Product Manager, Nexo Digital",
        avatar: "https://i.pravatar.cc/150?img=45",
        text: "Nos ayudó a organizar procesos que antes hacíamos en hojas de cálculo dispersas. Un cambio total para el equipo.",
        rating: 4
    },
    {
        name: "Ricardo Paz",
        role: "CEO, Paz Consultores",
        avatar: "https://i.pravatar.cc/150?img=60",
        text: "Recomendado completamente. La relación costo-beneficio es de las mejores que hemos encontrado en el mercado.",
        rating: 5
    },
    {
        name: "Fernanda Ortiz",
        role: "Coordinadora de Ventas, Vortex SA",
        avatar: "https://i.pravatar.cc/150?img=25",
        text: "Muy intuitivo y con un diseño agradable. Facilitó muchísimo la comunicación interna de nuestro equipo comercial.",
        rating: 4
    }
];

export default {
    testimonios: testimoniosBase.map((t) => ({
        ...t,
        stars: buildStars(t.rating)
    }))
};