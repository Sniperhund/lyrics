<script setup lang="ts">
import SolarShuffleLinear from "~icons/solar/shuffle-linear"
import SolarRewindBackBold from "~icons/solar/rewind-back-bold"
import SolarRewindForwardBold from "~icons/solar/rewind-forward-bold"
import SolarPlayBold from "~icons/solar/play-bold"
import SolarRepeatBold from "~icons/solar/repeat-bold"
import { state, setShowMusicPage } from "../stores/state"
import { computed, ref, onMounted } from "vue"
import { supabase } from "../util/supabase"

const songs = ref([])

async function getSongs() {
	let { data, error } = await supabase.from("Songs").select("*")
	console.log(data)
	songs.value = data
}

onMounted(() => {
	getSongs()
})
</script>

<template>
	<div class="flex flex-row text-white">
		<nav class="bg-[#252526] w-64 min-h-screen border-r-2 border-white/10">
			<ul class="flex flex-col pt-4 pl-8">
				<li>MUSIC</li>
				<li>
					<button @click="setShowMusicPage(true)">Browse</button>
				</li>
			</ul>
		</nav>
		<div class="w-screen overflow-hidden">
			<TopBar />
			<div class="bg-[#1f1f1f] w-full h-minus-navbar overflow-y-auto">
				<div class="m-8 grid gap-4 grid-cols-5C">
					<div v-for="song in songs" :key="song.id">
						<div>
							{{song.song_name}}
						</div>
						<div>
							{{song.song_writer}}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
