import RecipeForm from "../components/RecipeForm.jsx";

export default function Home() {
    return (
        <div className="container mx-auto px-4  py-8 flex flex-col min-h-[70vh] justify-center">
            <h1 className="bg-primary-dark text-4xl font-bold text-center my-8">Welcome to RecipeBook</h1>
            <p className="text-center text-lg mb-8">Your personal recipe manager. Add, view, and manage your favorite recipes all in one place.</p>
            <RecipeForm />
        </div>
    )
}