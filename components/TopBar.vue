<template>
	<nav class="bg-[#2c2c2c] h-[54px]">
		<ul class="flex flex-row justify-between items-center px-8 h-full pl-8">
			<li class="flex pl-4 grid-cols-4 gap-4">
				<button>
					<div v-if="false">
						<!-- Check if there is some song ids in the queue -->
						<solar-shuffle-linear class="text-gray-500" />
					</div>
					<div v-else>
						<solar-shuffle-linear />
					</div>
				</button>
				<solar-rewind-back-bold />
				<solar-play-bold />
				<solar-rewind-forward-bold />
				<solar-repeat-bold />
			</li>
			<li class="flex">
				<div>Song name etc.</div>
			</li>
			<li class="flex">
				<div>Volume</div>
			</li>
			<li class="flex">
				<div>Account etc.</div>
			</li>
		</ul>
	</nav>
</template>
