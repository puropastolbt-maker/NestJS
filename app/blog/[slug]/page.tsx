type Props = { 
    params: Promise<{ slug: string }>; 
}; 
 
export default async function BlogPostPage({ params }: Props) { 
    const { slug } = await params; 
 
    return ( 
        <main> 
            <h1>Post: {slug}</h1> 
            <p>Aquí irá el contenido del artículo "{slug}".</p> 
        </main> 
    ); 
}