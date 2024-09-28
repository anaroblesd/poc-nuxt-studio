<template>
    <h1>
        <ContentSlot name="title" />
    </h1>
    <h2>
        <ContentSlot name="subtitle" />
    </h2>
</template>

<script lang="ts" setup>
    defineProps({
        title: String,
        subtitle: String
    })
</script>

<style lang="css" scoped>
    h1 {
        color: var(--color-primary, #C70039);
    }

    h2 {
        color: var(--color-secondary, #581845);
    }
</style>