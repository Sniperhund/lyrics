<script setup lang="ts">
import { state, setShowMusicPage, setAudioRef } from "../stores/state"
import { computed, onMounted, ref } from "vue"

const showMusicPage = computed({
	get: () => state.showMusicPage,
	set: (value) => setShowMusicPage(value),
})

const audioElement = ref(null)

onMounted(() => {
	setAudioRef(audioElement.value)
})
</script>

<template>
	<audio
		ref="audioElement"
		src="https://ukmsbruoybwlkzlxrumz.supabase.co/storage/v1/object/public/songs/He%20Mistreats%20The%20Things%20He%20Loves.mp3?t=2023-05-05T19%3A36%3A34.372Z"
		autoplay
	/>
	<div v-if="showMusicPage">
		<MusicPage />
	</div>
	<div v-else>
		<Browse test="hello" />
	</div>
</template>
