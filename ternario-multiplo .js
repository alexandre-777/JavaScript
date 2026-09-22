let quartosDisponiveis = 5;
let reservaConfirmada = true;

let statusreserva = (reservaConfirmada && quartosDisponiveis > 0) ? "Reserva confirmada"
                        :(quartosDisponiveis > 0)?" Aguardando confirmação"
                        : "Sem quartos disponiveis"
console.log(statusreserva);//Saída: "Reserva confirmada"