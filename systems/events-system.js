function randomEvent() {

  const randomIndex = Math.floor(Math.random() * events.length);

  const event = events[randomIndex];

  addNews(`EVENTO: ${event.title} - ${event.description}`);

  return event;
}
