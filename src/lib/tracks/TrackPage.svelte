<script>
    import SEO from '@lib/SEO.svelte'
    export let title;
    export let subtitle;
</script>


<SEO title={title} />

<h1>{title}</h1>
<h2>{subtitle}</h2>
<slot></slot>