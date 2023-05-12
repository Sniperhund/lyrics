<script setup lang="ts">
import { state, setShowMusicPage } from "../stores/state"
import { computed } from "vue"

const showMusicPage = computed({
	get: () => state.showMusicPage,
	set: (value) => setShowMusicPage(value),
})
</script>

<template>
	<div>
		<p>MusicPage</p>
		<button @click="setShowMusicPage(false)">Exit</button>
		<button @click="state.audioRef.play()">Play music</button>
	</div>
</template>
