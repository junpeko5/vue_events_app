import EventService from "@/services/EventService";
export const namespaced = true;

export const state = {
  events: [],
  eventsTotal: 0,
  event: {},
  perPage: 3,
};

export const mutations = {
  SET_EVENTS(state, events) {
    state.events = events;
  },
  SET_EVENTS_TOTAL(state, eventsTotal) {
    state.eventsTotal = eventsTotal;
  },
  SET_EVENT(state, event) {
    state.event = event;
  },
};

export const actions = {
  fetchEvents({ commit }, { page }) {
    return EventService.getEvents(state.perPage, page).then((response) => {
      commit("SET_EVENTS_TOTAL", parseInt(response.headers["x-total-count"]));
      commit("SET_EVENTS", response.data);
    });
  },
  fetchEvent({ commit, getters }, id) {
    const event = getters.getEventById(id);
    if (event) {
      commit("SET_EVENT", event);
      return event;
    }
    return EventService.getEvent(id).then((response) => {
      commit("SET_EVENT", response.data);
      return response.data;
    });
  },
};

export const getters = {
  getEventById: (state) => (id) => {
    return state.events.find((event) => event.id === id);
  },
};
