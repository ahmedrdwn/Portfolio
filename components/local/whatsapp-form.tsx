"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { MessageCircle, Send } from "lucide-react"

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    projectType: z.string().min(2, "Project type is required"),
    description: z.string().min(10, "Please provide more detail about your project"),
})

export function WhatsAppForm() {
    const phoneNumber = "201029304000"; // From legacy data

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            projectType: "",
            description: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        const message = `Hello Ahmed, I am ${values.name}.%0A%0AI need help with a *${values.projectType}* project.%0A%0ADescription:%0A${values.description}`;
        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(url, '_blank');
    }

    return (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-500/10 p-3 rounded-full text-green-500">
                    <MessageCircle size={24} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white">Start a Project</h3>
                    <p className="text-slate-400 text-sm">Send me the details directly on WhatsApp.</p>
                </div>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-slate-300">Your Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="John Doe" {...field} className="bg-slate-950 border-slate-800 focus:border-green-500/50" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="projectType"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-slate-300">Project Type</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g. Power BI Dashboard, Web App..." {...field} className="bg-slate-950 border-slate-800 focus:border-green-500/50" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-slate-300">Project Requirements</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Tell me what you need..."
                                        className="min-h-[100px] bg-slate-950 border-slate-800 focus:border-green-500/50"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-500 text-white font-bold gap-2">
                        <Send size={18} /> Send to WhatsApp
                    </Button>
                </form>
            </Form>
        </div>
    )
}
