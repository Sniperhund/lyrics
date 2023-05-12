import { createStore } from "@harlem/core"

type StateType = {
	showMusicPage: boolean
	audioRef: HTMLAudioElement | null
}

const STATE: StateType = {
	showMusicPage: false,
	audioRef: null,
}

export const { state, getter, mutation, ...store } = createStore("user", STATE)

export const setShowMusicPage = mutation<boolean>(
	"showMusicPage",
	(state, payload) => {
		state.showMusicPage = payload
	}
)

export const setAudioRef = mutation<HTMLAudioElement>(
	"audioRef",
	(state, payload) => {
		// @ts-ignore
		state.audioRef = payload
	}
)
