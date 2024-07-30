import { ArrowRight } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function ProjectList() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Projeto 01</CardTitle>
          <CardDescription className="line-clamp-3 leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            laborum inventore temporibus nisi ratione, numquam cupiditate
            doloremque! Sint consequuntur sed, perferendis beatae, quaerat vel
            minus sapiente ratione incidunt soluta quasi.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex items-center gap-1.5">
          <Avatar className="size-4">
            <AvatarImage src={'https://github.com/hiurimendes.png'} />
            <AvatarFallback />
          </Avatar>
          <span className="text-xs text-muted-foreground">
            Created by{' '}
            <span className="font-medium text-foreground">Hiuri Mendes</span> a
            day ago
          </span>
          <Button size="xs" variant="outline" className="ml-auto">
            View
            <ArrowRight className="size-3 ml-2" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
